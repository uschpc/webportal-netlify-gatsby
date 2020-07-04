import React, {useState ,useEffect} from 'react';
import axios from 'axios';

const FORM = () => {
    const [name, setName] = useState('')
    const [recipient, setRecipient] = useState('')
    const [email, setEmail] = useState('')
    const [category, setCategory] = useState('condo')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [attachment, setAttachment] = useState('')

    const handleOnChange = (event) => {
        let value = ""
        switch(event.target.id) {
            case 'name':
                value = event.target.value
                setName(value)
                break;
            case 'recipient':
                value = event.target.value
                setRecipient(value)
                break;
            case 'email':
                value = event.target.value
                setEmail(value)
                break;
            case 'subject':
                value = event.target.value
                setSubject(value)
                break;
            case 'message':
                value = event.target.value
                setMessage(value)
                break;
            case 'category':
                value = event.target.value
                setCategory(value)
                break;
            case 'attachment':
                value = event.target.value
                setAttachment(value)
                break;
        }
    }

    useEffect(() => {
       
    }, [])

   const handleSubmit = (event) => {
        event.preventDefault();
        let bodyFormData = new FormData();
        bodyFormData.set('name', name);
        bodyFormData.set('email', email);
        bodyFormData.set('recipient', recipient);
        bodyFormData.set('category', category);
        bodyFormData.set('subject', subject);
        bodyFormData.set('message', message);
        bodyFormData.append('attachment', attachment); 
        bodyFormData.append('submit', 'submit'); 
        
        axios({
            method: 'post',
            url: 'https://hpcaccount.usc.edu/static/web/supportform_submit.php',
            data: bodyFormData,
            headers: {
                'Content-Type': 'multipart/form-data',
         }
            })
            .then(function (response) {
                //handle success
                console.log('success', response);
            })
            .catch(function (response) {
                //handle error
                console.log('err', response);
            });
    }

    return (
        // <form onSubmit={this.handleSubmit} method="POST" name="email_form_with_php" action="https://hpcaccount.usc.edu/static/web/supportform_simple.php" enctype="multipart/form-data"> 
        <form onSubmit={(e) => handleSubmit(e)}> 
            <ul>
                <li>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" name="name" maxLength="60" value={name} onChange={(e) => handleOnChange(e)} />
                </li>
                <li>
                    <label htmlFor="recipient">Recipient Email: </label>
                    <input id="recipient" type="text" name="recipient" maxLength="60" value={recipient} onChange={(e) => handleOnChange(e)} />
                </li>
                <li>
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="text" name="email" value={email} onChange={(e) => handleOnChange(e)} />
                </li>
                <li>
                    <label htmlFor="category">Category: </label>
                    <select id="category" name="category" value={category} onChange={(e) => handleOnChange(e)}>
                            <option id="discovery" value="discovery"> Cluster - Discovery</option>
                            <option id="condo" value="condo"> Cluster - Condo </option>
                            <option id="" value="account"> Account/Access </option>
                            <option id="" value="storage"> Storage </option>
                            <option id="" value="other"> Other </option>
                    </select>
                </li>
                <li>
                    <label htmlFor="subject">Subject (60): </label>
                    <input id="subject" type="text" name={subject} maxLength="60" onChange={(e) => handleOnChange(e)} />
                </li>
                <li>
                    <label htmlFor="message">Message (1000):</label>
                    <textarea id="message" name="message" maxLength="1000" value={message} onChange={(e) => handleOnChange(e)}></textarea>
                </li>
                <li>
                    <label htmlFor="attachment">Attachment:</label>
                    <input id="attachment" type="file" name="attachment" value={attachment} onChange={(e) => handleOnChange(e)} />
                </li>
                <li>
                    <label htmlFor="submit"></label>
                    <input id="submit" type="submit" value="Submit" name="submit" />
                </li>
            </ul>
    </form>
    )
}

export default FORM;