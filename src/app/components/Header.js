import styles from '@/app/styles/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/app/components/Nav'
export default function Header() {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href={'/'}>
          <Image src={'/logo.png'} alt='logo' width={150} height={50} />
        </Link>
      </div>
      <Nav />
    </header>
  )
}
