'use client'
interface FooterNavs {
  href: string
  name: string
}

export default function Footer() {
  const footerNavs: FooterNavs[] = [
    {
      href: 'javascript:void()',
      name: 'About'
    },
    {
      href: 'javascript:void()',
      name: 'Blog'
    },
    {
      href: 'javascript:void()',
      name: ''
    },
    {
      href: 'javascript:void()',
      name: 'Team'
    },
    {
      href: 'javascript:void()',
      name: 'Careers'
    },

    {
      href: 'javascript:void()',
      name: 'Suuport'
    }
  ]

  return (
    <footer className="text-gray-500 px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">&copy; 2023 All rights reserved.</div>
      </div>
    </footer>
  )
}
