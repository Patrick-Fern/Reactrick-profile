import React from "react";

export default function Contact() {
    return (
        <div>
            <h2>Leave me a message</h2>
            <form>
                <input name="name" placeholder="Your name" id="name" />
                <input name="email" placeholder="Your Email" id="email" type="email" />
                <textarea name="message" id="message" placeholder="message" type="text" ></textarea>
            </form>
        </div>
    )
}