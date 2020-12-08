# ASSESSMENT 5: Ruby Coding Practical Questions

# --------------------1) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data about each bike object.

class Bike 
    attr_accessor :model, :wheels, :frame, :speed
    def initialize model, wheels = 2, frame
        @model = model
        @wheels = wheels
        @frame = frame
        @speed = 0
    end

    def get_info
        "The #{@model} bike has #{@wheels} wheels and a #{@frame}cm frame"
    end

    def ring
        "Ding ding!"
    end

    def pedal
        @speed += 10
    end

    def brake
        if @speed > 0
            @speed -= 5
        else
            @speed = 0
        end
    end

end

bike = Bike.new("Trek", 2, 168)
p bike.get_info
p bike.ring
p bike.speed
p bike.pedal
p bike.pedal
p bike.pedal
p bike.pedal
p bike.speed
p bike.brake
p bike.brake
p bike.brake
p bike.brake
p bike.brake
p bike.brake
p bike.brake
p bike.brake
p bike.speed

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------2) Add a bell to the bike class and create the ability to ring the bell when the method is called.

# def ring
#     "Ding ding!"
# end


# Expected output example: my_bike.ring_bell => 'Ding ding!'


# -------------------3) Add a speedometer to the Bike class. The speed should be initialized at 0.

# Add speed to attr_accessor
# set @speed to 0 in initialize
# @speed = 0
# p bike.speed

# Expected output example: my_bike.speed => 0


# -------------------4) Add the ability to pedal faster. The pedal_faster method should increase the speed by a particular amount.

# def pedal
#     @speed += 10
# end

# Expected output example: my_bike.pedal_faster 10 => 10


# -------------------5) Add the ability to brake. The brake method should decrease the speed by a particular amount. The bike cannot go negative speeds.

# def brake
#     if @speed > 0
#         @speed -= 5
#     else
#         @speed = 0
#     end
# end

# Expected output example: my_bike.brake 15 => 0
