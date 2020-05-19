const path = require("path")
const fs = require("fs")
const yaml = require('js-yaml');

const dirPathNav = path.join(__dirname, "../src/data/settings")
const dirPathFeatureBoxes = path.join(__dirname, "../src/feature-boxes")
const dirPathFeatureStories = path.join(__dirname, "../src/featured-story")
const dirPathLatestNews = path.join(__dirname, "../src/latest-news")
const dirPath = path.join(__dirname, "../src/posts/content")
const dirPathPages = path.join(__dirname, "../src/pages/content")
let postlist = []
let pagelist = []
let featureBoxes = []
let featureStories = []
let latesNews = []

const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
}

const formatDate = (date) => {
    const datetimeArray = date.split("T")
    const dateArray = datetimeArray[0].split("-")
    const timeArray = datetimeArray[1].split(":")
    const month = dateArray[1]
    const monthName = months[dateArray[1]]
    const day = dateArray[2]
    const year = dateArray[0]
    const time = `${timeArray[0]}:${timeArray[1]}`

    return {"month": month, "monthName": monthName, "day": day, "year": year, "time": time}
}

  

const getPosts = () => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        let ilist = []
        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const parseContent = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({lines, metadataIndices})
                const content = parseContent({lines, metadataIndices})
                const parsedDate = metadata.date ? formatDate(metadata.date) : new Date()
                const publishedDate = `${parsedDate["monthName"]} ${parsedDate["day"]}, ${parsedDate["year"]}`
                const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`
                const date = new Date(datestring)
                const timestamp = date.getTime() / 1000
                post = {
                    id: timestamp,
                    title: metadata.title ? metadata.title : "No title given",
                    author: metadata.author ? metadata.author : "No author given",
                    date: publishedDate ? publishedDate : "No date given",
                    time: parsedDate["time"],
                    thumbnail: metadata.thumbnail,
                    content: content ? content : "No content given",
                }
                postlist.push(post)
                ilist.push(i)
                if (ilist.length === files.length) {
                    const sortedList = postlist.sort ((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync("src/posts.json", data)
                }
            })
        })
    })
    return 
}

const getPages = () => {
    fs.readdir(dirPathPages, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        files.forEach((file, i) => {
            let page
            let filePath = file.split(".")[0];
            fs.readFile(`${dirPathPages}/${file}`, "utf8", (err, contents) => { 
                page = {
                    filePath: filePath,
                    content: contents
                }
                pagelist.push(page);
                let data = JSON.stringify(pagelist)
                fs.writeFileSync("src/pages.json", data)
            })
        })
    })
    return 
}

const getNavigations = () => {
    fs.readdir(dirPathNav, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        files.forEach((file, i) => {
            try {
                var nav = yaml.safeLoad(fs.readFileSync(`${dirPathNav}/${file}`, 'utf8'));
                let data = JSON.stringify(nav)
                fs.writeFileSync("src/navigations.json", data)
              } catch (e) {
                console.log(e);
              }
        })
    })
    return 
}

const getFeatureBoxes = () => {
    let obj = {}
    fs.readdir(dirPathFeatureBoxes, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        files.forEach((file, i) => {
            let featureBox
            let filePath = file.split(".")[0];
            fs.readFile(`${dirPathFeatureBoxes}/${file}`, "utf8", (err, contents) => { 
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const parseImages = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const parseContent = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                
                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({lines, metadataIndices})
                const images = parseImages({lines, metadataIndices})
                const content = parseContent({lines, metadataIndices})

                featureBox = {
                    title: metadata.title ? metadata.title : "No title given",
                    image: images.thumbnail ? images.thumbnail : "/images/logo-top-usc.jpg",
                    content: content ? content : "No content given",
                }
                featureBoxes.push(featureBox);
                let data = JSON.stringify(featureBoxes)
                fs.writeFileSync("src/feature-boxes.json", data)
            })
        })
    })
    return 
}

const getFeatureStories = () => {
    let obj = {}
    fs.readdir(dirPathFeatureStories, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        files.forEach((file, i) => {
            let featureStory
            fs.readFile(`${dirPathFeatureStories}/${file}`, "utf8", (err, contents) => { 
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const parseImages = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const parseContent = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                
                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({lines, metadataIndices})
                const images = parseImages({lines, metadataIndices})
                const content = parseContent({lines, metadataIndices})

                featureStory = {
                    title: metadata.title ? metadata.title : "No title given",
                    image: images.thumbnail ? images.thumbnail : "/images/logo-top-usc.jpg",
                    content: content ? content : "No content given",
                }
                featureStories.push(featureStory);
                let data = JSON.stringify(featureStories)
                fs.writeFileSync("src/feature-stories.json", data)
            })
        })
    })
    return 
}

const getLatestNews = () => {
    let obj = {}
    fs.readdir(dirPathLatestNews, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        files.forEach((file, i) => {
            let latestNews
            fs.readFile(`${dirPathLatestNews}/${file}`, "utf8", (err, contents) => { 
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const parseImages = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const parseContent = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                
                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({lines, metadataIndices})
                const images = parseImages({lines, metadataIndices})
                const content = parseContent({lines, metadataIndices})

                latestNews = {
                    title: metadata.title ? metadata.title : "No title given",
                    image: images.thumbnail ? images.thumbnail : "/images/logo-top-usc.jpg",
                    content: content ? content : "No content given",
                }
                latesNews.push(latestNews);
                let data = JSON.stringify(latesNews)
                fs.writeFileSync("src/latest-news.json", data)
            })
        })
    })
    return 
}

getPosts()
getPages()
getNavigations()
getFeatureBoxes()
getFeatureStories()
getLatestNews()