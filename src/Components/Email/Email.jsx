import { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';

function Email() {
    const [copied, setCopied] = useState(false);
  
    const copyToClipboard = () => {
        const email = 'info@jannelle-brown.com';
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <div>
            <button 
                onClick={copyToClipboard} 
                className='rounded-full bg-white text-black py-2 px-6 font-semibold flex items-center'
            >
                <span className="mr-2">{copied ? 'Copied!' : 'waris@Smit.com'}</span>
                <MdContentCopy className="inline-block" />
            </button>
        </div>
    );
}

export default Email;
