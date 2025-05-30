# class JavascriptObject:
#     """
#     Emulate JavaScript prototypal objects in Python.
#     Each instance has a 'prototype' reference; attribute lookup
#     traverses the prototype chain.
#     """
#     def __init__(self, prototype=None):
#         # Store prototype reference directly in __dict__
#         self.__dict__['prototype'] = prototype

#     def __getattr__(self, name):
#         """
#         Called when attribute 'name' is not found in instance __dict__.
#         Attempts to delegate lookup to the prototype chain.
#         """
#         proto = self.__dict__.get('prototype')
#         if proto is not None:
#             # Delegate attribute lookup to the prototype
#             try:
#                 return getattr(proto, name)
#             except AttributeError:
#                 pass
#         # If not found in prototype chain, raise AttributeError
#         raise AttributeError(f"'{type(self).__name__}' object has no attribute '{name}'")
    
#     def __setattr__(self, name, value):
#         """
#         Always set attributes on the current object, without
#         affecting its prototype.
#         """
#         self.__dict__[name] = value


# # 1) ProtoA: defines foo and greet()
# ProtoA = JavascriptObject()
# ProtoA.foo = "foo from A"
# def greet(self):
#     return f"Greeting from A, foo = {self.foo}"
# ProtoA.greet = greet

# # 2) ProtoB: inherits from ProtoA and adds bar
# ProtoB = JavascriptObject(ProtoA)
# ProtoB.bar = "bar from B"

# # 3) InstanceC: inherits from ProtoB and adds baz
# InstanceC = JavascriptObject(ProtoB)
# InstanceC.baz = "baz from C"

# # Now we print:
# print("InstanceC.baz   :", InstanceC.baz)    # proper: baz from C
# print("InstanceC.bar   :", InstanceC.bar)    # inherited from ProtoB: bar from B
# print("InstanceC.foo   :", InstanceC.foo)    # inherited from ProtoA: foo from A
# print("InstanceC.greet():", InstanceC.greet(InstanceC))  
# # calls ProtoA.greet with self=InstanceC → Greeting from A, foo = foo from A

# # 4) Overriding (shadowing): if we override foo in InstanceC...
# InstanceC.foo = "foo overridden in C"
# print("After shadowing, InstanceC.foo:", InstanceC.foo)  
# # it uses the InstanceC version, not ProtoA

# # 5) Dynamic property addition:
# ProtoA.newProp = "new in A"
# print("InstanceC.newProp (dynamic):", InstanceC.newProp)


# obj.prop1
