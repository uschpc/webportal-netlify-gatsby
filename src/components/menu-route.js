import React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash'

const MenuRoute = (routes) => {
    const menuRouteHelper = (routes) => {
        const index = _.findIndex(routes.routes.edges, function(o) { 
            return o.node.frontmatter.route == routes.title; 
         });
         let slicedArray = routes.routes.edges.slice(0, index)
         let result = index === -1 ? routes.routes.edges : slicedArray;
         return result;
    }
    let result = menuRouteHelper(routes);
    return (
        <span>
            {result.map((item, i) => {
                return (
                    <Link to={item.node.frontmatter.routePath} key={i}>
                        {item.node.frontmatter.route} {(result.length - 1) !== i ? ' >> ' : '' }
                    </Link>
                )
            })}
        </span>
    )
}

export default MenuRoute;