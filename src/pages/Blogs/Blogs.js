import React from 'react';

const Blogs = () => {
    return (

        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        #1. What are the Difference Between JavaScript And NodeJS ?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 px-4 py-2">
                                <h4 className='text-center'>Javascript</h4>
                                <hr />
                                <li> Javascript is a programming language that is used for writing scripts on the website. </li>
                                <li> Javascript can only be run in the browsers.</li>
                                <li>It is basically used on the client-side.</li>
                                <li>Javascript is capable enough to add HTML and play with the DOM.</li>
                                <li> Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</li>
                                <li>Javascript is used in frontend development.</li>
                            </div>
                            <div className="col-lg-6 col-sm-12 px-4 py-2">
                                <h4 className='text-center'>NodeJS</h4> 
                                <hr />
                                <li>NodeJS is a Javascript runtime environment.</li>
                                <li> We can run Javascript outside the browser with the help of NodeJS.</li>
                                <li> It is mostly used on the server-side.</li>
                                <li> Nodejs does not have capability to add HTML tags.</li> 
                                <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript.  </li>
                                <li>Nodejs is used in server-side development.</li>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        #2. When should you use NodeJS and When should you use MongoDB?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    NodeJS and MongoDB are two different process. 
                    <li>NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.</li>
                    
                    <li>MongoDB is NoSQL database which is document oriented. It represents data as of JSON documents. It's used for store data.</li>
                    <li>Summary:The summary is MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.</li>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        #3. What other services does firebase provide other than authentication?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {/* <li> <strong>Firebase Database:</strong>  used to store users data like chat messages, users details and other metadata</li>
                        <li><strong>Firebase Cloud Storage:</strong>  used to store user-generated content like the profile picture, multimedia messages, etc.</li>
                        <li><strong>Firebase Cloud Messaging:</strong> used to send notification</li>
                        <li><strong>Firebase Remote Config:</strong>  used to perform A/B testing on the go</li> */}

                    </div>
                </div>
            </div>

        </div>



    );
};

export default Blogs;