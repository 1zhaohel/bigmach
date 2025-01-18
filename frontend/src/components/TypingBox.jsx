function TypingBox({receiver = "xxxx", value, handleReplyChange, handleSubmit}) {
    const placeholder = `reply to ${receiver}`

    return(
        <form onSubmit={handleSubmit} className="flex p-2.5 w-full text-sm text-gray1 bg-pink4 rounded-2xl border border-pink5 shadow-md ">
            <textarea id="message" rows="1" placeholder={placeholder} value={value} onChange={handleReplyChange} className="flex-10 px-4 py-2.5 w-full bg-pink4 text-sm text-gray1 resize-none focus:outline-none" ></textarea>

            <input type="image" src="arrow_button.svg" className="w-10 flex-1"/>

        </form>
    )
}

export default TypingBox