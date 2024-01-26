    function redirectToLink(linkType) {
      var baseUrl = 'https://github.com/Wheelman-v2/Corporation_Fonts/raw/main';
      var specificPaths = {
        'DWImpactamin': 'DWImpactamin/DWImpactamin.zip',
        'LH': 'LH/LH.zip',
        'Her-Gilwonok': 'Her/Her-Gilwonok.zip',
        'Her-Leeoksun': 'Her/Her-Leeoksun.zip',
        'YanoljaYache': 'Yanolja_Yache/Yanolja_Yache.zip',
        'UNPEOPLE_Gothic': 'UNPEOPLE/UNPEOPLE_Gothic.zip',
        // 필요에 따라 링크 추가
      };

      var specificPath = specificPaths[linkType];
      if (specificPath) {
        var fullUrl = baseUrl + '/' + specificPath;
        window.location.href = fullUrl;
      } else {
        console.error('잘못된 링크 유형:', linkType);
      }
    }
