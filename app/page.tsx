import Image from 'next/image'
export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Image src="/profile.jpg" alt="Profile" width={100} height={100} />
    </div>
  )
  
  
}