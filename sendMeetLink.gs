function sendMeetLink() {
  var now = new Date();

  console.log('Current time:', now);
  console.log('Day of week:', now.getDay());
  console.log('Hour:', now.getHours());

  if (now.getDay() === 2 && now.getHours() === 9 && now.getMinutes() >= 50 && now.getMinutes() < 55) {
    var startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0);
    var endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);
    
    var calendar = CalendarApp.getDefaultCalendar();
    
    var event = calendar.createEvent('mmWave Weekly Meeting',
      startTime,
      endTime,
      {
        description: '此 Google Meet 連結由系統自動化產生，請勿直接回覆。',
        
        guests: [
          'example-1@gmail.com',
          'example-2@gmail.com',
          'example-3@gmail.com'
        ].join(','),
        
        sendInvites: true
      }
    );
  }
}
