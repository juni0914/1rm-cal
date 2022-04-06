

function kakaoShare(){
  const url = 'https://rm-cal.web.app';
  Kakao.Link.sendDefault({
    objectType: 'feed',
      content: {
        title: '1RM 계산기',
        description: '#헬스 #3대운동 #보디빌딩 #바디프로필',
        imageUrl: 'https://drive.google.com/file/d/1Zc77DstP8TBVpOq1ZT8X5XRmMR5SQxba/view?usp=sharing',
        link: {
          mobileWebUrl: url,
          webUrl: url
        }
      },

      buttons: [
          {
            title: '사이트로 이동하기!',
            link: {
              mobileWebUrl: url,
              webUrl: url
        },
      },
    ]
  });
}
