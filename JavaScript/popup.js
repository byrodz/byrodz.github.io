document.addEventListener("DOMContentLoaded", function() {
  function setupPopup(triggerId, popupId, closeBtnId) {
    var popupTrigger = document.getElementById(triggerId);
    var popup = document.getElementById(popupId);
    var closeBtn = document.getElementById(closeBtnId);

    popupTrigger.addEventListener('click', function() {
      popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
      if (event.target == popup) {
        popup.style.display = 'none';
      }
    });
  }

  setupPopup('popup-trigger1', 'popup1', 'close-btn1');
  setupPopup('popup-trigger2', 'popup2', 'close-btn2');
  setupPopup('popup-trigger3', 'popup3', 'close-btn3');
  setupPopup('popup-trigger4', 'popup4', 'close-btn4');
  setupPopup('popup-trigger5', 'popup5', 'close-btn5');
  setupPopup('popup-trigger6', 'popup6', 'close-btn6');
  setupPopup('popup-trigger7', 'popup7', 'close-btn7');
  setupPopup('popup-trigger8', 'popup8', 'close-btn8');
  setupPopup('popup-trigger9', 'popup9', 'close-btn9');
});
