def smile():
  print("π")

def angry():
  print("π‘")

def love():
  print("π₯°")

smile()
angry()
love()

# κ·Όλ° μ¬κΈ° κ° ν¨μμ print("hello")λ₯Ό μΆκ°ν΄μΌ νλ€λ©΄?
# κ·Έλ¦¬κ³  μ΄λ° ν¨μκ° λ§ 100κ°κ° λλλ€λ©΄?
# μ΄λ΄ λ°μ, μ΄λ€ ν¨μμ μΌλΆλ§ μ‘°κΈμ© λ°λκ² ν  μ μλ μλ‘μ΄ ν¨μλ₯Ό λ§λλκ² μ΄λ€κ°?

# κ·Έλμ μλμ κ°μ΄ ν¨μλ₯Ό μΌμλ‘ λ°λ μλ‘μ΄ ν¨μλ₯Ό λ§λ λ€. 
def say_hello(func):
  
  def new_func():
    print("hello")
    func()

  return new_func


# μ΄λ¬λ©΄ κ° ν¨μμ rint("hello")λ₯Ό μΆκ°ν΄μΌ νλ μμ²­μ΄
smile = say_hello(smile)
angry = say_hello(angry)
love = say_hello(love) 

smile()
angry()
love()
# μ΄λ κ² κ°λ¨νκ² ν΄κ²°λλ€. 

# μ΄κ²λ³΄λ€ μ’ λ κ°κ²°ν λ¬Έλ²μ΄ λ°λ‘ @λ₯Ό νμ©νλ κ²μ΄λ€. 
@say_hello
def smile():
  print("π")
# μ΄κ² κ³§ smile = say_hello(smile) μ κ°μ μλ―Έμ΄λ€. 

@say_hello
def angry():
  print("π‘")

@say_hello
def love():
  print("π₯°")

smile()
angry()
love()
# κ°μ κ²°κ³Όκ° λμ¨λ€. 