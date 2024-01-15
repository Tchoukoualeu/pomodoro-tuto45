import "./Pomodoro.css"

export const Pomodoro = () => {
  return (
    <>
      <div id="outer-shell">
        <h1>Pomodoro Clock</h1>
        <div id="setting">
          <div id="left-set">
            <div id="session-label">Session Length</div>
            <div className="myLine">
              <button id="session-decrement">-</button>
              <div id="session-length">25</div>
              <button id="session-increment">+</button>
            </div>
          </div>
          <div id="right-set">
            <div id="break-label">Break Length</div>
            <div className="myLine">
              <button id="break-decrement">-</button>
              <div id="break-length">5</div>
              <button id="break-increment">+</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div id="timer-label">Session</div>
          <div id="time-left">25:00</div>
          <div className="btn">
            <input id="start_stop" value="START" type="button"></input>
            <input id="reset" value="RESET" type="button"></input>
          </div>
        </div>
      </div>

      <audio preload="auto" id="beep">
        <source src="https://goo.gl/65cBl1" type="audio/wav" />
      </audio>
    </>
  )
}
