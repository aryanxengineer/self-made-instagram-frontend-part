import React from 'react'

const HeaderInstaPopup = ({ name, Icon }: { name: string, Icon: React.ReactNode }) => {
    return (
        <div className="flex justify-between items-center p-3">
            <h2 className="text-lg leading-none font-medium tracking-wide">{name}</h2>
            {Icon}
        </div>
    )
}

export default HeaderInstaPopup