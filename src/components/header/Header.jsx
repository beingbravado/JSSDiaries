import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                {/* <span className="headerTitleSm">React & Node</span> */}
                <span className="headerTitleLg">JSS DIARIES</span>
            </div>
            <img
                className="headerImg"
                src="https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg"
                alt="" />
        </div>
    )
}
