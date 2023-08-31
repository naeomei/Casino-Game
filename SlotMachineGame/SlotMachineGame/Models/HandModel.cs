namespace SlotMachineGame.Models
{
    public class HandModel
    {
        public string HandOwner { get; set; }
        public List<CardModel> Hand { get; set; }

        public HandModel() { }



        public HandModel(List<CardModel> hand)
        {
            Hand = hand;
        }

        public HandModel(string handOwner, CardModel hand)
        {
            HandOwner = handOwner;
            Hand.Add( hand);
        }
    }
}
