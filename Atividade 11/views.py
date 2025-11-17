from django.http import HttpResponse

def index(request):
    return HttpResponse("✅ A view index funcionou, WOW!")

def sobre(request):
    return HttpResponse("""
        <h1>📘 Sobre o Sistema</h1>
        <p>Este é um sistema Django para demonstrar como criar views e rotas.</p>
    """)

def contato(request):
    return HttpResponse("""
        <h1>📞 Contato</h1>
        <p>Esta é a página de contato.</p>
    """)

def ajuda(request):
    return HttpResponse("""
        <h1>🆘 Ajuda</h1>
        <p>Esta é a página de ajuda.</p>
    """)