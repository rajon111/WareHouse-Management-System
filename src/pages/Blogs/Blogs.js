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
                                <h4 className='text-center text-2xl text-cyan-700'>Javascript</h4>
                                <hr />
                                <li> Javascript is a programming language that is used for writing scripts on the website. </li>
                                <li> Javascript can only be run in the browsers.</li>
                                <li>It is basically used on the client-side.</li>
                                <li>Javascript is capable enough to add HTML and play with the DOM.</li>
                                <li> Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</li>
                                <li>Javascript is used in frontend development.</li>
                            </div>
                            <div className="col-lg-6 col-sm-12 px-4 py-2">
                                <h4 className='text-center text-2xl text-cyan-700'>NodeJS</h4> 
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
                        #3. What is the difference between sql and nosql
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <div className="row">
                            <div className="col-lg-6 col-sm-12 px-4 py-2">
                                <h4 className='text-center text-2xl text-cyan-700'>SQL	</h4>
                                <hr />
                                <li> SQL relational</li>
                                <li>use structured query language and have a predefined schema.</li>
                                <li>SQL are vertically scalable</li>
                                <li>SQL are table based	</li>
                            </div>
                            <div className="col-lg-6 col-sm-12 px-4 py-2">
                                <h4 className='text-center text-2xl text-cyan-700'>NoSQL</h4> 
                                <hr />
                                <li>non-relational</li>
                                <li> NoSQL databases have dynamic schemas for unstructured data</li>
                                <li>  NoSQL  are horizontally scalable.</li>
                                <li>  NoSQL  are document, key-value,graph or wide-column stores.</li>
                            
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        #4. What is the purpose of jwt and how does it work?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    JWT (JSON Web Token) is an open value that is used to share security information between two parties - a client and a server. Each JWT contains an encoded JSON object, which contains a set of claims. JWTs are signed using a cryptographic algorithm to ensure that claims cannot be changed after the token is issued. Unlike all other web tokens, JWT contains a set of claims. Used to transmit information between two parties to a claim. This claim depends on the use of the hand. For example, a claimant may claim who gave the token, how long it may be valid, or what permission has been granted to the client.
                    </div>
                </div>
            </div>

        </div>



    );
};

export default Blogs;