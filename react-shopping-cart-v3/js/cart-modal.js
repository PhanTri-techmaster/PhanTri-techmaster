function CartModal({isVisible,showName,handCancel,handDelete}){
    return(
    isVisible &&(<div class="delete-box">
    <div class="box">
    <h2>Bạn có muốn xóa {showName}</h2>
     <div class="confirm-box">
     <button onClick={handDelete}>OK</button>
    <button onClick={handCancel}>Cancel</button>
    </div>
    </div>
  </div>)   
)
}