import { FaDiscord, FaTwitter } from "react-icons/fa"
export const main = {
    eyebrow: "👋 ",
    title: (
        <>
            <div className="">The Dynamic Community of Tech Enthusiasts</div>
        </>
    ),
    description: (
        <>
            <p>
                Being passionate about tech is exhilarating, but it can also be a test
                of innovation, finding your voice, and standing out.
            </p>
            <p>
                Join our online community to connect with fellow tech enthusiasts,
                brainstorm groundbreaking ideas, and inspire one another to explore,
                experiment, and share your tech expertise
            </p>
        </>
    ),
    primaryLink: (
        <a
            href="https://discord.gg/6nmQsvpZ"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
        >
            <FaDiscord />
            Join Discord Server
        </a>
    ),
    twitterLink: (
        <a
            href="https://twitter.com/growtechie"
            className="btn btn-twitter"
            target="_blank"
            rel="noreferrer"
        >
            <FaTwitter />
            Follow on Twitter
        </a>
    ),
};
