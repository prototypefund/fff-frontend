const Footer = () => {
    return (
        <div className="flex justify-around bg-gray-300 pt-2 min-w-full text-sm">
            <div className="m-6">
              <ul>
                <li className="font-semibold mb-1">Facts For Friends GbR</li>
                {/* <li>Musterstraße 123</li> */}
                <li>21149 Hamburg</li>
              </ul>
            </div>
            <div className="m-6">
              <ul>
                <li>Fact Aid</li>
                <li>Mitmachen</li>
                <li>
                  <a href="/about"> 
                  Über uns
                  </a>
                </li>
                <li>Impressum</li>
              </ul>
            </div>
            <div className="m-6">
              <ul>
                <li className="font-semibold mb-1">Folge uns</li>
                <li className="flex">
                  <a className="cursor-pointer" href="https://www.facebook.com/factsforfriends.de" target="_blank">
                    <svg className="h-6 w-6 mr-1 sm:mr-2 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z"/>
                    </svg>
                  </a>
                  <a className="cursor-pointer" href="https://www.instagram.com/factsforfriends.de/" target="_blank">
                    <svg className="h-6 w-6 mr-1 sm:mr-2 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                      <path d="M17.946 5.29a6.606 6.606 0 00-.418-2.185 4.412 4.412 0 00-1.039-1.594A4.412 4.412 0 0014.895.472a6.606 6.606 0 00-2.184-.418C11.75.01 11.444 0 9 0S6.25.01 5.29.054a6.606 6.606 0 00-2.185.418A4.412 4.412 0 001.51 1.511 4.412 4.412 0 00.472 3.105a6.606 6.606 0 00-.418 2.184C.01 6.25 0 6.556 0 9s.01 2.75.054 3.71a6.606 6.606 0 00.418 2.185 4.412 4.412 0 001.039 1.594 4.411 4.411 0 001.594 1.039 6.606 6.606 0 002.184.418C6.25 17.99 6.556 18 9 18s2.75-.01 3.71-.054a6.606 6.606 0 002.185-.418 4.602 4.602 0 002.633-2.633 6.606 6.606 0 00.418-2.184C17.99 11.75 18 11.444 18 9s-.01-2.75-.054-3.71zm-1.62 7.347a4.978 4.978 0 01-.31 1.67 2.98 2.98 0 01-1.708 1.709 4.979 4.979 0 01-1.671.31c-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052a4.979 4.979 0 01-1.67-.31 2.788 2.788 0 01-1.036-.673 2.788 2.788 0 01-.673-1.035 4.978 4.978 0 01-.31-1.671c-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637a4.979 4.979 0 01.31-1.67 2.788 2.788 0 01.673-1.036 2.788 2.788 0 011.035-.673 4.979 4.979 0 011.671-.31c.95-.043 1.234-.052 3.637-.052s2.688.009 3.637.052a4.979 4.979 0 011.67.31 2.788 2.788 0 011.036.673 2.788 2.788 0 01.673 1.035 4.979 4.979 0 01.31 1.671c.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637zM9 4.378A4.622 4.622 0 1013.622 9 4.622 4.622 0 009 4.378zM9 12a3 3 0 113-3 3 3 0 01-3 3zm5.884-7.804a1.08 1.08 0 11-1.08-1.08 1.08 1.08 0 011.08 1.08z"/>
                    </svg>
                  </a>
                  <a className="cursor-pointer" href="https://twitter.com/facts4friends" target="_blank">
                    <svg className="h-6 w-6 mr-1 sm:mr-2 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M17.316 6.246c.008.162.011.326.011.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 005.588-1.562 3.779 3.779 0 01-3.526-2.621 3.858 3.858 0 001.705-.065 3.779 3.779 0 01-3.028-3.703v-.047a3.766 3.766 0 001.71.473 3.775 3.775 0 01-1.168-5.041 10.716 10.716 0 007.781 3.945 3.813 3.813 0 01-.097-.861 3.773 3.773 0 013.774-3.773 3.77 3.77 0 012.756 1.191 7.602 7.602 0 002.397-.916 3.789 3.789 0 01-1.66 2.088 7.55 7.55 0 002.168-.594 7.623 7.623 0 01-1.884 1.953z"/>
                    </svg>
                  </a>
                  <a className="cursor-pointer" href="https://www.linkedin.com/company/facts-for-friends/" target="_blank">
                  <svg className="h-6 w-6 mr-1 sm:mr-2 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </li>
                <li className="italic text-gray-700">#FactsForFriends</li>
                <li className="italic text-gray-700">#WirVsVirus</li>
              </ul>
            </div>
        </div>
    )
}
    
export default Footer;