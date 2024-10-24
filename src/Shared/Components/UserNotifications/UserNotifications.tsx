import { Letter, LetterOpen } from "Shared/Assets/Icons";

const UserNotifications = ({ arr }:{arr:Array<any>}) => {
  return (
    <>
      {
      arr.length > 0 ?
      arr.map((item) => (
        <a 
          className="User_Notification_Preview g-4"
          data-isRead={item.isRead}
        >
          {item.isRead ? <LetterOpen /> : <Letter />}
          {item.message}
        </a>
      ))
      :
      <div className="Float_Page_Line Static">Você não possui notificações</div>
    }
    </>
  );
};

export default UserNotifications;
