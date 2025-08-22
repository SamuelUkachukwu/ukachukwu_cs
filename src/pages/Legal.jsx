import React from "react";
import policy from "../data/privacyPolicy.json";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const p = policy.privacyPolicy;

const PrivacyPolicy = () => {
    const renderTextWithLinks = (text) => {
        return text.split(/(https?:\/\/[^\s]+)/g).map((part, idx) =>
            part.match(/https?:\/\/[^\s]+/) ? (
                <a
                    key={idx}
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800"
                >
                    link
                </a>
            ) : (
                part
            )
        );
    };

    return (
        <>
            <div className="px-2 space-y-6 pt-30">
                {/* Title */}
                <h1 className="text-xl md:text-4xl font-bold tracking-tight rounded-2xl bg-[#D9D9D9] dark:bg-[#2A2A2A] p-4 shadow">
                    {p.title}
                </h1>

                <p className="text-sm text-gray-500">Last updated: {p.lastUpdated}</p>

                {/* Intro */}
                {p.intro.map((para, idx) => (
                    <p
                        key={idx}
                        className="text-lg leading-relaxed rounded-lg bg-[#D9D9D9] dark:bg-[#2A2A2A] p-4 shadow"
                    >
                        {renderTextWithLinks(para)}
                    </p>
                ))}

                {/* Interpretation & Definitions */}
                <section>
                    <h2 className="text-[14px] md:text-xl font-semibold mt-8 mb-4">
                        Interpretation and Definitions
                    </h2>
                    <p>
                        {renderTextWithLinks(p.interpretationAndDefinitions.interpretation)}
                    </p>
                    <ul className="list-disc list-inside space-y-4 mt-4">
                        {Object.entries(p.interpretationAndDefinitions.definitions).map(
                            ([term, def]) => (
                                <li
                                    key={term}
                                    className="rounded-lg bg-[#D9D9D9] dark:bg-[#2A2A2A] p-3 shadow-sm"
                                >
                                    <strong>{term}:</strong> {renderTextWithLinks(def)}
                                </li>
                            )
                        )}
                    </ul>
                </section>

                {/* Data Collection */}
                <section>
                    <h2 className="text-[14px] md:text-xl font-semibold mt-8 mb-4">
                        Data Collection
                    </h2>
                    <p className="mb-4">Personal Data we may collect:</p>
                    <ul className="list-disc list-inside space-y-4">
                        {p.dataCollection.personalData.map((item, i) => (
                            <li key={i}>{renderTextWithLinks(item)}</li>
                        ))}
                    </ul>
                    <p className="mt-4">
                        {renderTextWithLinks(p.dataCollection.usageData)}
                    </p>

                    <h3 className="text-[14px] md:text-xl font-semibold mt-6 mb-2">Cookies</h3>
                    <ul className="space-y-4">
                        {p.dataCollection.tracking.cookies.map((cookie, idx) => (
                            <li
                                key={idx}
                                className="rounded-lg bg-[#D9D9D9] dark:bg-[#2A2A2A] p-3 shadow-sm"
                            >
                                <strong>{cookie.type}</strong> ({cookie.duration}) –{" "}
                                {renderTextWithLinks(cookie.purpose)}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Use of Data */}
                <section>
                    <h2 className="text-[14px] md:text-xl font-semibold mt-8 mb-4">
                        Use of Data
                    </h2>
                    <ul className="list-disc list-inside space-y-4">
                        {p.useOfData.map((use, idx) => (
                            <li key={idx}>{renderTextWithLinks(use)}</li>
                        ))}
                    </ul>
                </section>

                {/* Retention, Transfer, Deletion */}
                <section>
                    <h2 className="text-[14px] md:text-xl font-semibold mt-8 mb-4">
                        Data Retention
                    </h2>
                    <p>{renderTextWithLinks(p.retention)}</p>

                    <h2 className="text-[14px] md:text-xl font-semibold mt-8 mb-4">
                        Data Transfer
                    </h2>
                    <p>{renderTextWithLinks(p.transfer)}</p>

                    <h2 className="text-[14px] md:text-xl font-semibold mt-8 mb-4">
                        Data Deletion
                    </h2>
                    <p>{renderTextWithLinks(p.deletion)}</p>
                </section>

                {/* Disclosure */}
                <section>
                    <h2 className="text-[14px] md:text-xl font-semibold mt-8 mb-4">
                        Disclosure
                    </h2>
                    <p>{renderTextWithLinks(p.disclosure.businessTransactions)}</p>
                    <p className="mt-2">
                        {renderTextWithLinks(p.disclosure.lawEnforcement)}
                    </p>

                    <h3 className="text-[14px] md:text-xl font-semibold mt-4 mb-2">
                        Legal Requirements
                    </h3>
                    <ul className="list-disc list-inside space-y-4">
                        {p.disclosure.legalRequirements.map((req, idx) => (
                            <li key={idx}>{renderTextWithLinks(req)}</li>
                        ))}
                    </ul>
                </section>

                {/* Security */}
                <section>
                    <h2 className="text-[14px] md:text-xl font-semibold mt-8 mb-4">
                        Security
                    </h2>
                    <p>{renderTextWithLinks(p.security)}</p>
                </section>

                {/* Children */}
                <section>
                    <h2 className="text-[14px] md:text-xl font-semibold mt-8 mb-4">
                        Children's Privacy
                    </h2>
                    <p>{renderTextWithLinks(p.children)}</p>
                </section>

                {/* Third Party Links */}
                <section>
                    <h2 className="text-[14px] md:text-xl font-semibold mt-8 mb-4">
                        Third-Party Links
                    </h2>
                    <p>{renderTextWithLinks(p.thirdPartyLinks)}</p>
                </section>

                {/* Changes */}
                <section>
                    <h2 className="text-[14px] md:text-xl font-semibold mt-8 mb-4">
                        Changes to This Policy
                    </h2>
                    <p>{renderTextWithLinks(p.changes)}</p>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-[14px] md:text-xl font-semibold mt-8 mb-4">
                        Contact Us
                    </h2>
                    <p>
                        If you have any questions, email us at{" "}
                        <a
                            href={`mailto:${p.contact.email}`}
                            className="text-blue-800 hover:underline"
                        >
                            {p.contact.email}
                        </a>
                    </p>
                </section>
            </div>
        </>
    );
};

const AccessibilityStatement = () => (
    <div className="mx-auto rounded-2xl px-2 space-y-6 pt-30">
        <h1 className="text-xl md:text-4xl font-bold tracking-tight rounded-2xl bg-[#D9D9D9] dark:bg-[#2A2A2A] p-4 shadow">Accessibility Statement</h1>

        <div className="rounded-2xl p-4 bg-[#D9D9D9] dark:bg-[#2A2A2A] space-y-6 shadow">
            <section>
                <h2 className="text-[14px] md:text-xl font-semibold">Accessibility Commitment</h2>
                <p>
                    As a software engineer, I am committed to making my portfolio website accessible to all users,
                    including people with disabilities. I strive to follow best practices and standards for digital
                    accessibility, ensuring that everyone can explore my work, learn about my skills, and contact me
                    without barriers.
                </p>
            </section>

            <section>
                <h2 className="text-[14px] md:text-xl font-semibold">Standards and Conformance</h2>
                <p>
                    This site aims to conform to <strong>WCAG 2.1 Level AA</strong> guidelines, which provide standards
                    for accessible content, navigation, and interaction. While I continuously work to ensure compliance,
                    some areas of the site may not fully conform yet.
                </p>
            </section>

            <section>
                <h2 className="text-[14px] md:text-xl font-semibold">Measures Taken</h2>
                <ul className="list-disc list-inside space-y-4">
                    <li>Use semantic HTML and proper heading structures.</li>
                    <li>Ensure color contrast meets recommended guidelines.</li>
                    <li>Provide descriptive alt text for images and portfolio media.</li>
                    <li>Make interactive elements keyboard-navigable.</li>
                    <li>Test the site using accessibility tools and screen readers.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-[14px] md:text-xl font-semibold">Known Limitations</h2>
                <p>
                    Some dynamic components, such as interactive code demos or embedded third-party widgets, may
                    have accessibility limitations. I am actively working to address these areas.
                </p>
            </section>

            <section>
                <h2 className="text-[14px] md:text-xl font-semibold">Feedback and Contact</h2>
                <p className="mb-2">
                    If you encounter any accessibility issues or have suggestions to improve the site, please contact me:
                </p>
                <ul className="list-disc list-inside space-y-4 mb-2">
                    <li>Email: <a href="mailto:shybold.inc@gmail.com" className="text-blue-800 hover:underline">shybold.inc@gmail.com</a></li>
                </ul>
                <p>I welcome your feedback and aim to respond within 2 business days.</p>
            </section>

            <section>
                <h2 className="text-[14px] md:text-xl font-semibold">Last Updated</h2>
                <p>August 22, 2025</p>
            </section>
        </div>
    </div>
);


const Legal = () => {
    const { docType } = useParams();

    const documents = {
        privacy: <PrivacyPolicy />,
        accessibility: <AccessibilityStatement />,
    };

    const content = documents[docType] || (
        <div>Document not found Please try again later.</div>
    );

    return (
        <main className="">
            {/* background lines are these divs  */}
            <div className="fixed top-[65px] bottom-0 left-[12%] w-px bg-[#0C0C0D] dark:bg-[#F2F2F2] opacity-20 z-[2]">
                <div className="absolute top-[9.2%] left-[-30px] w-6 h-[10%] border-b-[1px] border-r-[1px] border-[#0C0C0D] dark:border-[#F2F2F2] opacity-80" />
                {/* <div className="absolute bottom-[5%] md:bottom-[10%] left-2 w-[40vw] h-[10%] border-t-[1px] border-l-[1px] border-[#0C0C0D] dark:border-[#F2F2F2] opacity-80" /> */}
            </div>
            <div className="z-10 w-[74%] max-w-6xl mx-auto">{content}</div>
            <Footer />
        </main>
    );
};

export default Legal;
