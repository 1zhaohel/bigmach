function TypingBox({receiver = "xxxx"}) {
    const placeholder = `reply to ${receiver}`

    return(
        <div>
            <textarea id="message" rows="1" placeholder={placeholder} className="block p-2.5 w-full text-sm text-gray1 bg-pink4 rounded-lg border border-pink5 resize-none shadow-md " ></textarea>
            
        </div>

    )
}

export default TypingBox