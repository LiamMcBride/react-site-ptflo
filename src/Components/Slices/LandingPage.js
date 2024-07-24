import './LandingPage.css';
import {NameHeader, Header2, LargeSubtext} from '../Text'

function LandingPage({children}) {
  return (
    <section id="landing-page" className="landing-page">
        <div className="intro-segment">
            <Header2>Hey, I'm</Header2>
            <NameHeader>Liam McBride</NameHeader>
            <br></br>
            <br></br>
            <br></br>
            <LargeSubtext>I am a full stack developer who specializes in React applications.<br></br><br></br>I value creative development and would love to apply it by creating user experiences that stand out and leave an impression.</LargeSubtext>
        </div>
        <div className="call-segment">
            <div className="flex-col">
                <div className="flex-row">
                    <div className="call-square">
                        <svg className="largeBlob" width="582" height="465" viewBox="0 0 582 465" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M284.148 0.0277847C410.565 -1.38474 542.584 51.0544 576.45 158.625C607.473 257.164 502.56 334.002 407.804 392.806C319.495 447.61 210.512 493.981 120.218 441.76C18.1501 382.73 -24.2404 267.302 13.757 164.912C51.4696 63.2905 163.065 1.38071 284.148 0.0277847Z" fill="#2CA358"/>
                        </svg>
                        <LargeSubtext>I'm currently looking for a position with a company that matches my goals and specialties.</LargeSubtext>
                        <div className="specific-call">
                            <svg className="icon-svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <a href="#projects-page">
                                    <rect width="40" height="40" rx="20" fill="#F37DAE"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.0059 8.45593L30.0059 14.2294V21.1115H27.7836V16.6671L21.117 20.5161V30.9084L20.0059 31.5499L10.0059 25.7764V14.2294L20.0059 8.45593ZM27.7836 22.2226L27.7836 25.5559H31.117V27.7782L27.7836 27.7781L27.7836 31.1115H25.5614L25.5614 27.7781L22.2281 27.7782V25.5559H25.5614L25.5614 22.2226H27.7836ZM12.228 16.6671L12.2281 24.4934L18.8947 28.3424V20.5161L12.228 16.6671ZM20.0059 11.0219L13.4503 14.8068L20.0059 18.5916L26.5614 14.8068L20.0059 11.0219Z" fill="#F3FEF7"/>
                                </a>
                            </svg>
                            <LargeSubtext>Take a look at some of my favorite projects</LargeSubtext>
                        </div>
                        <div className="specific-call">
                            <svg className="icon-svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <a href="#projects-page">
                                    <rect width="40" height="40" rx="20" fill="#F37DAE"/>
                                    <g clipPath="url(#clip0_911_70)">
                                        <path d="M21.3897 20.1362C21.0579 20.247 20.7039 20.3085 20.3354 20.3085C19.967 20.3085 19.6129 20.247 19.2811 20.1362C16.8708 20.5321 15.6094 22.3036 15.6094 24.4533H20.3354H25.0614C25.0614 22.3036 23.8002 20.5321 21.3897 20.1362Z" fill="#F3FEF7"/>
                                        <path d="M20.3347 19.5426C21.7635 19.5426 22.9214 18.3841 22.9214 16.9555V16.2217C22.9214 14.7931 21.7635 13.635 20.3347 13.635C18.9059 13.635 17.748 14.7931 17.748 16.2217V16.9555C17.748 18.3841 18.9059 19.5426 20.3347 19.5426Z" fill="#F3FEF7"/>
                                        <path d="M26.7105 7H13.958C11.4916 7 9.48438 9.00765 9.48438 11.4745V29.1965C9.48438 31.6633 11.4916 33.67 13.958 33.67H24.6726H25.3589L25.8442 33.1855L30.7005 28.3292L31.185 27.8443V27.158V11.4745C31.185 9.00765 29.1778 7 26.7105 7ZM29.5284 27.158H27.0204C25.7243 27.158 24.6725 28.2093 24.6725 29.5058V32.0134H13.958C12.4022 32.0134 11.141 30.7517 11.141 29.1965V11.4745C11.141 9.91833 12.4022 8.65661 13.958 8.65661H26.7105C28.2667 8.65661 29.5283 9.91833 29.5283 11.4745V27.158H29.5284Z" fill="#F3FEF7"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_911_70">
                                        <rect width="26.67" height="26.67" fill="white" transform="translate(7 7)"/>
                                        </clipPath>
                                    </defs>
                                </a>
                            </svg>
                            <LargeSubtext>Or if you're a fan of hard facts, peruse my resume</LargeSubtext>
                        </div>
                    </div>
                </div>
                <div className="contact-segment">
                    <LargeSubtext>Looking to get in contact?</LargeSubtext>
                </div>
            </div>
        </div>
    </section>
  );
}

export default LandingPage
