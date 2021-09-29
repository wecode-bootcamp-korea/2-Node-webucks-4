// 아직 미사용
import ApiErrors from './apiErrors';

const apiErrorHandler = (err, req, res, next) => {
  // console.error, console.log 쓰지 않기! 비동기처리 안되므로

  if (err instanceof ApiErrors) {
    res.status(err.code).json(err.message);
    return;
  }

  res.status(500).json('예상치 못한 에러라 미처 대처하지 못했습니다 ㅠ');
};

export default apiErrorHandler;
