import React, { useCallback, useEffect, useState } from 'react'


// site_key 6LdYAwMiAAAAAGd2lVf9wfPiOtkq81QvRTz4HlGh
// secret_key  6LdYAwMiAAAAAD0T_Oan8Xefaxyq-AZ2V2WSJPR8

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const Recaptcha = () => {
  const handleLoaded = (_:any) => {
    window.grecaptcha.ready((_:any) => {
      window.grecaptcha
        .execute("6LdYAwMiAAAAAGd2lVf9wfPiOtkq81QvRTz4HlGh", { action: "homepage" })
        .then((token:any) => {
          console.log(token)
        })
    })
  }
  useEffect(() => {
    // Add reCaptcha
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js?render=6LdYAwMiAAAAAGd2lVf9wfPiOtkq81QvRTz4HlGh"
    script.addEventListener("load", handleLoaded)
    document.body.appendChild(script)
  }, [])
  return (
    <div
    className="g-recaptcha"
    data-sitekey="6LdYAwMiAAAAAGd2lVf9wfPiOtkq81QvRTz4HlGh"
    data-callback='onSubmit'
    data-size="visible"
  ></div>
  )
}

export default Recaptcha
