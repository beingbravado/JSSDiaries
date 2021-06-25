import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "./sidebar.css"

export default function SideBar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://cdn.pixabay.com/photo/2016/04/17/20/19/woman-1335487_960_720.jpg"
                    alt=""
                />
                <p>
                    Have an artist you admire read your final draft. A fresh set of practiced eyes can do wonders and help you polish it to perfection. Another reader with a trained eye will be able to tell you if your art correctly reflects you or not.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link className="link" to={`/?cat=${c.name}`}>
                            <li className="sidebarListItem" >{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
