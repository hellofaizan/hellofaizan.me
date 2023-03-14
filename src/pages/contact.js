import React from 'react'
import TimeStatus from './utils/timestatus'
import { useRef, useState } from 'react'

const Contact = () => {

  const email = useRef("");
  const message = useRef("");
  const [sending, setSending] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const sendMessage = async () => {
    if (email.current == "" || message.current == "") return setErrMsg("Please fill out all fields!");
    const response = new XMLHttpRequest();

    response.open("POST", process.env.NEXT_PUBLIC_WEBHOOK_URL);
    response.setRequestHeader('Content-type', 'application/json');
    setSending(true);

    const timestamp = new Date();

    const msgEmbed = {
      title: `Message by ` + email.current,
      description: message.current,
      color: hexToDecimal("#FFE900"),
      timestamp: timestamp.toISOString(),
    }

    const params = {
      username: "hellofaizan.me",
      content: "<@890232380265222215>",
      embeds: [msgEmbed]
    }
    response.send(JSON.stringify(params));
    response.onload = () => {
      if (response.status >= 200 && response.status < 400) {
        setSending(false);
        setErrMsg("Message sent successfully!");
      } else {
        setSending(false);
        setErrMsg("Something went wrong!");
      }
    }

    function hexToDecimal(hex) {
      return parseInt(hex.replace("#", ""), 16)
    }
  }
  return (
    <>
      <div className='container flex flex-col max-w-[760px] mx-auto md:mt-32 mt-24 sm:mt-32'>
        <h1 className='font-bold text-3xl sm:text-5xl mb-3'>Contact Me 📧</h1>
        <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide">
          Have an inquiry, or want to connect? Feel free to leave a message below, or get in touch via Discord, Twitter, or email.
        </p>
        <TimeStatus />

        <div className='relative rounded-lg mb-5' >

          <div>
            <label htmlFor="email" className="text-sm font-medium">Enter Discord Id or Email Address</label>

            <div className="relative mt-1">
              <input
                type="text"
                onChange={e => (email.current = e.target.value)}
                className="w-full rounded-lg dark:bg-[#353638] text-black dark:text-white border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="yourname#0000"
              />
              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <i className="bi bi-discord"></i>
              </span>
            </div>
          </div>

          <div className='mt-5'>
            <label htmlFor="message" className="text-sm font-medium">Your Message</label>

            <div className="relative mt-1">
              <textarea
                id="message"
                rows="4"
                onChange={e => (message.current = e.target.value)}
                className="w-full dark:bg-[#353638] rounded-lg text-black dark:text-white border-gray-200 p-4 mb-2 pr-12 text-sm shadow-sm"
                placeholder="Drop your message. I will reply back soon."
              />
            </div>
          </div>

          <button
            type='button'
            onClick={sendMessage}
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            <span>
              Send Message
              {sending && <i class="bi bi-stop-circle animate-spin ml-2"></i>}
              {!sending && <i className="bi bi-chat-left ml-2"></i>}
            </span>
          </button>

          <p className="text-center text-sm mt-5 text-gray-500">
            {errMsg}
          </p>
        </div>

      </div>
    </>
  )
}

export default Contact
