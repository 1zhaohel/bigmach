function TypingBox({receiver = "xxxx"}) {
    const placeholder = `reply to ${receiver}`

    return(
        <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
            <textarea id="message" rows="1" placeholder={placeholder} className="block p-2.5 w-full text-sm text-gray-900 bg-pink4 rounded-lg border border-pink5 focus:ring-blue-500 focus:border-blue-500 resize-none" ></textarea>
        </div>

    )
}

export default TypingBox