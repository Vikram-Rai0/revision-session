// onMouseOver runs when the mouse pointer moves over an element.

// Real-time Use

// Used in:

// dropdown menus

// tooltips

// hover effects

// image preview

// 📌 Real use:
// Navbar dropdown menu on hover.

import React, { useState } from "react";

const OnMoustOver = () => {
    const [menu, setShowMenu] = useState(false);

    return (
        <div className="relative w-60">

            {/* hover area */}
            <div
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
                className="p-2 h-10 w-40 rounded-2xl border-2 bg-red-400"
            >
                <h1>Over Me</h1>

                {/* dropdown menu */}
                {menu && (
                    <div className="absolute top-20 w-60 h-40 border bg-blue-500 rounded-3xl text-white p-2">
                        <p>Menu 1</p>
                        <p>Menu 2</p>
                        <p>Menu 3</p>
                    </div>
                )}
            </div>

        </div>
    );
};

export default OnMoustOver;