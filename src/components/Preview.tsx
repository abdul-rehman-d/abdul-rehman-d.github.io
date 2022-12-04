import { useEffect, useRef, useState } from 'react'

interface PreviewProps {
  url: string;
  title: string;
}

const Preview = ( { url, title }: PreviewProps ) => {
  const [selectedSize, setSelectedSize] = useState<'mobile' | 'tablet' | 'desktop'>('mobile')
  const [iframeLoading, setIframeLoading] = useState<boolean>(true)

  const iframeContainerRef = useRef(null)
  const iframeRef = useRef(null)

  useEffect(() => {
    switch (selectedSize) {
      case 'mobile':
        if (window.innerWidth < 500) iframeRef.current.width = '100%'
        else iframeRef.current.width = '375px' 
        break;
      case 'tablet':
        if (window.innerWidth < 768) iframeRef.current.width = '100%'
        else iframeRef.current.width = '786px' 
        break;
      case 'desktop':
        if (window.innerWidth < 1440) iframeRef.current.width = '100%'
        else iframeRef.current.width = '1336px' 
        break;
      default:
        break;
    }
  }, [selectedSize])

  return (
    <div>
      <div className='flex flex-row justify-end gap-4 px-4 md:px-16 lg:px-64'>
        <button onClick={() => setSelectedSize('mobile')}>Mobile</button>
        <button onClick={() => setSelectedSize('tablet')}>Tablet</button>
        <button onClick={() => setSelectedSize('desktop')}>Desktop</button>
      </div>
      {selectedSize}
      <div className='flex justify-center px-4 relative' ref={iframeContainerRef}>
        <iframe
          className={iframeLoading ? 'hidden' : ''}
          src={url}
          title={title}
          width='100%'
          height='100%'
          onLoad={() => setIframeLoading(false)}
          ref={iframeRef}
        />
      </div>
    </div>
  )
}

export default Preview