namespace SlotMachineGame.Models
{
    public class CardModel
    {
        int Number { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public string Image { get; set; }

        public CardModel() { }

        public CardModel(int number, string name, string value, string image)
        {
            Number = number;
            Name = name;
            Value = value;
            Image = image;
        }
    }
}
