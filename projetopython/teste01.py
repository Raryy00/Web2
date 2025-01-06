ativ = float(input("QUal atividade 1 ou 2?: "))

if ativ == 1:
    name = input("Insira seu nome: ")
    year = input("Insira sua idade: ")
    verificar = float(input("1 ou 2: "))
    if verificar == 1:
        print("Olá", name, ",Adivinhei sua idade e é:", year)
    else:
        print("se mata", name, "voce nasceu à:", year, "anos, tem muita idade já, seu velh@.")

else:
    num1 = float(input("Digite um numero: "))
    num2 = float(input("Digite outro numero: "))
    soma = num1 + num2
    dif = num1-num2
    prd = num1 * num2
    print ("A soma é:", soma,", A diferença é:", dif, ", e o produto:", prd)