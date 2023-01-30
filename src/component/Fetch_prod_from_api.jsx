import React, { useEffect, useState } from 'react';

export default function Products() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch('https://flowcodes.in/work/project/tech-japanese/wc-api/v3/products?consumer_key=ck_6d88eaa90e82741b9b7820d580d668602d3b56cd&consumer_secret=cs_f803c2e50f6c675d6903383906021db7abac47cc');
            if(!response.ok) {
                console.log("something want wrong");
                return;
            }    
            const posts = await response.json();
            console.log(posts);
            setPosts(posts.products);
        }    
        loadPosts();
   }, [])
  return (
    <>
    <div className='container'>
        <div className='raw'>
            <div className='card-group'>
            { posts.map((product)=>(
             <div class="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <img src={product.featured_src} className="card-img-top" alt="..."/>
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">${product.price}</p>
                        <a href={product.permalink} className="btn btn-primary" target={'_blank'}>add to cart</a>
                    </div>
               </div>
             </div>
        ))
         }
         </div>
        </div>
    </div>
    </>
 )
}