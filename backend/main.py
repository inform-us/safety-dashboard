from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Create an instance of the FastAPI class
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Allows these methods
    allow_headers=["*"],  # Allows all headers
)

# Define a route (endpoint) with a GET method
@app.get("/api")
def read_root():
    return {"message": "Hello, World!"}

# If this file is run directly (not imported as a module), start the server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
