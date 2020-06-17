import Link from 'next/link';

export default () => (
  <header>
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href="/">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <svg className="h-10 w-10" viewBox="0 0 464 464">
            <path d="m72.199219 40h320c17.601562 0 32 14.398438 32 32v320c0 17.601562-14.398438 32-32 32h-320c-17.597657 0-32-14.398438-32-32v-320c0-17.601562 14.402343-32 32-32zm0 0" fill="#e9e9e9"/>
            <path d="m320.199219 160c0 88.367188-71.632813 160-160 160-88.363281 0-160-71.632812-160-160s71.636719-160 160-160c88.367187 0 160 71.632812 160 160zm0 0" fill="#239172"/>
            <path d="m288.199219 160c0 70.691406-57.308594 128-128 128-70.691407 0-128-57.308594-128-128s57.308593-128 128-128c70.691406 0 128 57.308594 128 128zm0 0" fill="#2ab793"/>
            <path d="m72.199219 160c44.800781 48.800781 120 52 168.800781 7.199219 2.398438-2.398438 4.800781-4.800781 7.199219-7.199219-44.800781-48.800781-120-52-168.800781-7.199219-2.398438 2.398438-4.796876 4.800781-7.199219 7.199219zm0 0" fill="#e9e9e9"/>
            <g fill="#c4c4c4">
              <path d="m328.199219 72h72v16h-72zm0 0"/>
              <path d="m344.199219 112h56v16h-56zm0 0"/>
              <path d="m344.199219 152h56v16h-56zm0 0"/>
              <path d="m344.199219 192h56v16h-56zm0 0"/>
              <path d="m344.199219 232h56v16h-56zm0 0"/>
              <path d="m352.199219 272h48v16h-48zm0 0"/>
              <path d="m64.199219 344h216v16h-216zm0 0"/>
              <path d="m64.199219 376h248v16h-248zm0 0"/>
            </g>
            <path d="m104.199219 224h112v16h-112zm0 0" fill="#239172"/>
            <path d="m104.199219 80h112v16h-112zm0 0" fill="#239172"/>
            <path d="m288.199219 256 64 72h9.601562c4 0 8 1.601562 11.199219 4.800781l83.199219 83.199219c5.601562 5.601562 8 12.800781 8 20 0 16-12.800781 28-28 28-7.199219 0-14.398438-3.199219-20-8l-83.199219-83.199219c-3.199219-3.199219-4.800781-7.199219-4.800781-11.199219v-9.601562l-64-72" fill="#3f3f3f"/>
            <path d="m184.199219 160c0 13.253906-10.746094 24-24 24-13.253907 0-24-10.746094-24-24s10.746093-24 24-24c13.253906 0 24 10.746094 24 24zm0 0" fill="#4a4a56"/>
            <path d="m464.199219 436c0-7.199219-3.199219-14.398438-8-20l-83.199219-83.199219c-3.199219-3.199219-7.199219-4.800781-11.199219-4.800781h-9.601562l-24 24v9.601562c0 4 1.601562 8 4.800781 11.199219l83.199219 83.199219c11.199219 11.199219 28.800781 11.199219 40 0 4.800781-5.601562 8-12.800781 8-20zm0 0" fill="#2b2b2b"/>
          </svg>
          <span className="mx-3 text-xl">
            Transparencia Costa Rica
          </span>
        </a>
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/2018">
          <a className="mr-10 text-green-500 hover:text-green-700">2018</a>
        </Link>
        <Link href="/2019">
          <a className="text-green-500 hover:text-green-700">2019</a>
        </Link>
      </nav>
    </div>
  </header>
);
