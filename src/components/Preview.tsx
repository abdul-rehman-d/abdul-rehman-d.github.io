import { useRef, useState } from 'react'
import { ToastOptions, toast } from 'react-toastify';
import { faDesktop, faMobile, faTablet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PreviewProps {
  url: string;
  title: string;
}

const toastObj : ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

const Preview = ( { url, title }: PreviewProps ) => {
  const [selectedSize, setSelectedSize] = useState<'mobile' | 'tablet' | 'desktop'>('mobile')
  const [iframeLoading, setIframeLoading] = useState<boolean>(true)

  const iframeContainerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const setSize = (size: string | ((prevState: "mobile" | "tablet" | "desktop") => "mobile" | "tablet" | "desktop")) => {
    if (!iframeContainerRef.current || !iframeRef.current) return
    switch (size) {
      case 'mobile':
        if (window.innerWidth < 500) iframeRef.current.width = '100%'
        else iframeRef.current.width = '375px'
        setSelectedSize(size)
        break;
      case 'tablet':
        if (window.innerWidth < 500) {
          toast.error('Cannot select a view that is larger than your current screen size.', toastObj)
        } else {
          if (window.innerWidth < 768) iframeRef.current.width = '100%'
          else iframeRef.current.width = '786px'
          setSelectedSize(size)
        }
        break;
      case 'desktop':
        if (window.innerWidth < 991) {
          toast.error('Cannot select a view that is larger than your current screen size.', toastObj)
        } else {
          if (window.innerWidth < 1440) iframeRef.current.width = '100%'
          else iframeRef.current.width = '1336px' 
          setSelectedSize(size)
        }
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <div className='flex flex-row justify-between px-4 md:px-16 lg:px-64'>
        <p>Select View:</p>
        <div className='flex flex-row gap-4'>
          <button
            onClick={() => setSize('mobile')}
            className={`${selectedSize==='mobile' ? 'text-primary-400' : ''} hover:text-primary-600`}
          >
            <FontAwesomeIcon icon={faMobile} />
          </button>
          <button
            onClick={() => setSize('tablet')}
            className={`${selectedSize==='tablet' ? 'text-primary-400' : ''} hover:text-primary-600`}
          >
            <FontAwesomeIcon icon={faTablet} />
          </button>
          <button
            onClick={() => setSize('desktop')}
            className={`${selectedSize==='desktop' ? 'text-primary-400' : ''} hover:text-primary-600`}
          >
            <FontAwesomeIcon icon={faDesktop} />
          </button>
        </div>
      </div>
      <div className='flex justify-center py-4 px-4 relative h-[800px]' ref={iframeContainerRef}>
        {iframeLoading && (
          <div className='absolute top-0 left-0 w-full h-32 flex justify-center items-center'>
            <p className='text-2xl text-primary-400'>Loading...</p>
          </div>
        )}
        <iframe
          className={iframeLoading ? 'hidden' : ''}
          src={url}
          title={title}
          width='375px'
          height='100%'
          onLoad={() => setIframeLoading(false)}
          ref={iframeRef}
        />
      </div>
    </div>
  )
}

export default Preview