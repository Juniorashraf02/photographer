import React from 'react';

const Blogs = () => {
    return (
        <div className="mt-24 container text-justify mx-auto">
            <h1 className="text-2xl font-semibold">Difference between authorization and authentication</h1>
            <p className="mt-5"> <span className=" font-semibold "> Authentication:</span>&nbsp; Authentication The process determines the identity of the user before disclosing sensitive information. This is crucial for systems or interfaces where the user's priority is to protect confidential information. In the process, the user makes a plausible claim about the identity of the individual (his or her) or entity.Certificates or claims can be usernames, passwords, fingerprints, etc. Authentication and non-rejection, sort of issues are handled at the application level. The disqualification authentication process can significantly affect the availability of services.
                <p className="mt-5"><span className=" font-semibold "> Authorization: </span>&nbsp; Authorization strategy is used to determine the permissions granted to an authorized user. Simply put, it examines whether it allows the user to access certain resources. Authorization occurs after the authentication event, where the user's identity is confirmed before the user's access list is then determined by searching the table and entries stored in the database.</p>
            </p>

            <h1 className="text-2xl font-semibold mt-10">What other services does firebase provide other than authentication?</h1>
            <p className="mt-5">Firebase other services:
                <div className="ml-10">
                <li>Cloud Messaging</li>
                <li>Cloud Firestore </li>
                <li> Cloud Functions</li>
                <li> Hosting</li>
                <li>Google Analytics</li>
                <li>Remote Configuration</li>
                <li>Predictions</li>
                <li>Realtime Database</li>
                <li>Storage</li>
                </div>
            </p>


        </div>
    );
};

export default Blogs;