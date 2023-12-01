'use client'

export default function Footer() {
  interface FooterNavs {
    href: string
    name: string
  }

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
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2022 Float UI All rights reserved.
        </div>
        <div className="mt-4 sm:mt-0">
          <ul className="items-center justify-center space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
            {footerNavs.map((item, idx) => (
              <li key={idx} className=" hover:text-gray-800">
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
