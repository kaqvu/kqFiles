export interface FileItem {
  name: string
  description: string
  version: string
  downloadUrl: string
  required?: boolean
}

export const publicFiles: FileItem[] = [
  {
    name: "kAcc",
    description: "Rdzeń ekosystemu kaqvu. Udostępnia wspólne API i biblioteki — bez niego żaden mod nie zadziała.",
    version: "v1.0",
    downloadUrl: "https://cdn.kaqvu.pl/kqFiles/kacc-1.0.jar",
    required: true,
  },
  {
    name: "kUtil",
    description: "Narzędzia pomocnicze dla wszystkich modów kaqvu — konfiguracja, przetwarzanie danych, integracja z klientem.",
    version: "v26.4",
    downloadUrl: "https://cdn.kaqvu.pl/kqFiles/kutil-26.4.jar",
    required: true,
  },
  {
    name: "kaqvuCore",
    description: "Przechwytuje wiadomości z czatu i przepisuje kod lub wyniki działań w czasie rzeczywistym według własnych reguł.",
    version: "v1.8",
    downloadUrl: "https://cdn.kaqvu.pl/kqFiles/kaqvucore-1.8.jar",
  },
  {
    name: "kAutomation",
    description: "Silnik automatyzacji do serwerów Minecraft. Twórz sekwencje akcji i reaguj na zdarzenia w grze bez żadnej ingerencji.",
    version: "v8.0",
    downloadUrl: "https://cdn.kaqvu.pl/kqFiles/kautomation-8.0.jar",
  },
  {
    name: "kReconnect",
    description: "Inteligentny auto-reconnect. Wykrywa rozłączenia i wraca na serwer z konfigurowalnym interwałem — zero kliknięć.",
    version: "v8.0",
    downloadUrl: "https://cdn.kaqvu.pl/kqFiles/kreconnect-8.0.jar",
  },
]

export const privateFiles: FileItem[] = [
  {
    name: "kaqvuModules",
    description: "Zestaw gotowych dodatków rozszerzających automatyzację rozgrywki na serwerach. Każdy moduł działa niezależnie i można je dowolnie łączyć.",
    version: "v7.2",
    downloadUrl: "https://cdn.kaqvu.pl/kqFiles/kaqvumodules-7.2.jar",
  },
  {
    name: "kaqvuRynek",
    description: "Automatyzuje kupowanie i sprzedaż przedmiotów na serwerowym rynku. Monitoruje oferty w czasie rzeczywistym i wykonuje transakcje według zdefiniowanych warunków — bez żadnej ingerencji.",
    version: "v8.1",
    downloadUrl: "https://cdn.kaqvu.pl/kqFiles/kaqvurynek-8.1.jar",
  },
  {
    name: "kAutomation",
    description: "Silnik automatyzacji do serwerów Minecraft. Twórz sekwencje akcji i reaguj na zdarzenia w grze bez żadnej ingerencji.",
    version: "v8.0",
    downloadUrl: "https://cdn.kaqvu.pl/kqFiles/kautomation-8.0.jar",
  },
  {
    name: "kUtilController",
    description: "Kontroler narzędzi kUtil zapewniający zaawansowane zarządzanie konfiguracją i integracją z innymi modami.",
    version: "v26.4",
    downloadUrl: "https://cdn.kaqvu.pl/kqFiles/kutilcontroller-26.4.jar",
  },
]
