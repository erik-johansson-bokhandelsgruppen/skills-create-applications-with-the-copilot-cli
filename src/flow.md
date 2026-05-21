flowchart LR

%% =======================
%% XMCloud Group
%% =======================
subgraph XMCloud
CS["(Change Store)"]
EDGE[EDGE]

    PD[P.Design]
    CC["(Contact) Change"]
    GCP[GCP - Throttle - Proxy]

    CS -->|Contact change| PD
    CS --> EDGE

    EDGE --> PD
    EDGE --> CC
    EDGE --> GCP

    PD --> CC
    CC --> GCP

end

%% =======================
%% Vercel Group
%% =======================
subgraph Vercel
WH[/webhook/]
VAL[/validate/]

    PATHS["/path1<br/>/path2<br/>.../"]
    ISR[ISR Invalidate Cache]

end

%% =======================
%% Frontend / Rendering
%% =======================
PAGES["Page 1<br/>Page 2<br/>..."]
UPDATED[Updated Content]
%% Cross-system connections
%% =======================
GCP --> WH
WH --> VAL
VAL --> PATHS
PATHS --> ISR
ISR --> PAGES

EDGE --> PAGES
PAGES --> UPDATED

%% Optional feedback flow
PAGES --> PATHS
