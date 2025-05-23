'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Breadcrumbs = () => {
  const pathname = usePathname()

  // Не отображать на главной странице
  if (pathname === '/') return null

  // связка названий с индексами
  const breadcrumbTitles: { [key: string]: string } = {
    '': 'Главная',
    about: 'О проекте',
    ranks: 'Система званий',
    awards: 'Премии и конкурсы',
    voting: 'Голосования',
    news: 'Новости и события',
    login: 'Вход',
    register: 'Регистрация',
    profile: 'Профиль пользователя',
  }

  // Убираем слеши и преобразуем в массив
  const pathSegments = pathname
  .split('/')
  .filter((segment) => segment !== '')

  return (
    <div className="py-1 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-sm text-gray-600 flex items-center space-x-2">
          {pathSegments.length > 0 && (
            <>
              <Link href="/" className="hover:text-blue-600">Главная</Link>
              {pathSegments.map((segment, index) => {
                const path = '/' + pathSegments.slice(0, index + 1).join('/')

                // Получаем название для текущего сегмента
                const title = breadcrumbTitles[segment] || decodeURIComponent(segment)

                return (
                  <span key={index}>
                    <span className="mx-2 text-gray-500">/</span>
                    <Link href={path} className="hover:text-blue-600">
                      {title}
                    </Link>
                  </span>
                )
              })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Breadcrumbs