export const Endpoints={
    base: process.env.REACT_APP_BASE_URL,
    
    charecter:`/character`,
    SingleCh:(id)=>`/character/${id}`,
    location:`/location`,
    episode:`/episode`
}