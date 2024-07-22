import "./email-icon.scss"

export function Email_Icon({emailIsHovered}) {


  return (
    <div className={emailIsHovered? "email-icon email-icon--hovered" : "email-icon"}>
        <div className="email-icon__top" style={emailIsHovered? {borderTopColor: "blue"} : {borderTopColor: "black"}}></div>
        <div className="email-icon__right" style={emailIsHovered? {borderRightColor: "blue"} : {borderRightColor: "black"}}></div>
        <div className="email-icon__left" style={emailIsHovered? {borderLeftColor: "blue"} : {borderLeftColor: "black"}}></div>
    </div>
  )
}