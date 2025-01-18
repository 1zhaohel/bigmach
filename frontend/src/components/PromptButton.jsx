function PromptButton( {btnText, btnCb} ) {
    return (
        <button 
            onClick={btnCb}
            className="
                px-6
                py-1
                items-center
                text-center
                rounded-2xl 
                bg-pink6
                text-gray-600
                text-lg 
                font-light 
                italic 
                shadow-md 
                transition 
                hover:shadow-xl
                border-2
                border-gray2
                "
        >
            {btnText}
        </button>
    )
}

export default PromptButton