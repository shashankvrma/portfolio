const MyModal = ({ visible, onClose }) => {
  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        {/* bg-[#0a192f83] */}
      <div className="flex bg-neutral-950 bg-opacity-75 w-full h-auto m-20 text-gray-300 p-4 rounded">
        <div className="w-1/2">
            <img src="src\assets\contact.png" />
        </div>
        <div className="w-1/2">
        <h1 className="font-semibold text-center text-2xl">
          Contact Me 
        </h1>
        <p className="text-center mb-1">Send me an email on shashankvrma@gmail.com</p>
        <p className="text-center mb-3">or fill the form below</p>
        <div className="flex flex-col">
          <form method='POST' action="https://getform.io/f/pbmqewpb" className='flex flex-col'>
              <input className="border  p-2 rounded mb-5" type="text" placeholder='Name' name='name' />
              <input className="border  p-2 rounded mb-5" type="email" placeholder='Email' name='email' />
              <textarea className="border  p-2 rounded mb-5" name="message" rows="5" placeholder='Message'></textarea>
              <div className="text-center">
                <button className="px-5 py-2 border-2 border-white text-white rounded hover:bg-white hover:text-black">
                  Send Message
                </button>
                <button onClick={onClose} className="px-5 py-2 ml-3 border-2 border-red-500 bg-red-500 text-white rounded hover:bg-red-700 hover:border-red-700">
                  Close
          </button>
              </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MyModal;