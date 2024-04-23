import React, { useState } from "react";
import { Box, Flex, Heading, FormControl, FormLabel, Input, Button, useToast, Image } from "@chakra-ui/react";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [quoteAmount, setQuoteAmount] = useState("");
  const toast = useToast();

  const handleLogin = (e) => {
    e.preventDefault();
    // Display quote amount logic here
    // TODO: Add login logic here
    toast({
      title: "로그인 성공",
      description: "관리자 페이지로 이동합니다.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGNvbXBhbnklMjBsb2dvfGVufDB8fHx8MTcxMzEwMDI0MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Logo" mb={4} />
          <Heading>나청소 관리자 로그인</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleLogin}>
            <FormControl isRequired>
              <FormLabel>아이디</FormLabel>
              <Input type="text" placeholder="아이디를 입력하세요" value={username} onChange={(event) => setUsername(event.currentTarget.value)} />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>비밀번호</FormLabel>
              <Input type="password" placeholder="비밀번호를 입력하세요" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
            </FormControl>
            <Button width="full" mt={4} type="submit" colorScheme="blue">
              로그인
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Index;
