# Exception

: 예상하지 못한 이슈.
최대한 app내부에서 해결하려고 조치를 취해놓고, 정 안되는 문제인 경우 사용자에게 에러 페이지, 에러 메세지를 보내주어야 함.

# Error state

: 예상할 수 있는 이슈

그래서 조심해야 할 것은

- Error인데 Exception인 줄 알고 처리를 제대로 하지 않거나 잘 못 처리하는 경우가 있다.

1. Error인지 Eception인지를 구분해서 사용해야 한다.
